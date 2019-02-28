import { uiActions } from '../actions';

test('Test startFetching action', () => {
    expect(uiActions.startFetching()).toMatchSnapshot();
});
test('Test stoptFetching action', () => {
    expect(uiActions.stoptFetching()).toMatchSnapshot();
});
test('Test setOnlineState action', () => {
    expect(uiActions.setOnlineState()).toMatchSnapshot();
});
test('Test setOfflineState action', () => {
    expect(uiActions.setOfflineState()).toMatchSnapshot();
});
test('Test emitError action', () => {
    expect(uiActions.emitError(__.error, __.errorMessage)).toMatchSnapshot();
});
