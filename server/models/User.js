const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        // set up the regex/validator for this to be an email
    },
    password: {
        type: String,
        required: true
        // set up requirments for the password later on
    },
    // foo: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Foo',
    //     }
    // ]
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;