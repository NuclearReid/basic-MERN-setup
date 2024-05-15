const { User } = require('../models');
const {signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {

        users: async () => {
            return User.find()//.populate('foo');
        },

        me: async (parent, args, context) => {
            if (context.user) {
                const foundUser = await User.findOne({
                    _id: context.user._id,
                }); // if i have more models attached to the user
                //.populate({
                    //path: 'foo',
                // });
                return foundUser
            }
            throw AuthenticationError;
        }

    },
    Mutation: {
        addUser: async (parent, {username, password }) => {
            // const foo = await Foo.create({
            //     boo: '',
            // });
            const user = await User.create({
                username,
                password,
                // foo: foo._id,
            });
            const token = signToken(user);
            return {token, user}
        },
        login: async (parent, {email, password }) => {
            const user = await User.findOne({ email });//.populate('foo');

            if(!user) {
                throw AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw){
                throw AuthenticationError;
            }
            const token = signToken(user);
            return {token, user};
        }
    }
}

module.exports = resolvers;