import { profileActions } from '../actions';

test('Test fillProfile action', () => {
    expect(profileActions.fillProfile(__.userProfile)).toMatchSnapshot();
});
test('Test updateAvatar action', () => {
    expect(profileActions.updateAvatar(__.url)).toMatchSnapshot();
});
test('Test clearProfile action', () => {
    expect(profileActions.clearProfile()).toMatchSnapshot();
});
test('Test updateNameAsync action', () => {
    expect(profileActions.updateNameAsync(__.newName)).toMatchSnapshot();
});
test('Test updateAvatarAsync action', () => {
    expect(profileActions.updateAvatarAsync(__.newAvatar)).toMatchSnapshot();
});
test('Test updatePasswordAsync action', () => {
    expect(profileActions.updatePasswordAsync(__.newPassword)).toMatchSnapshot();
});
