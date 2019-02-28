import { profileReducer } from "../reducer";
import { profileActions } from "../actions";

describe("Profile reducer:", () => {
  test("should return initial state by default", () => {
    expect(profileReducer(void 0, { type: "@@INIT" })).toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "",
  "token": "",
}
`);
  });
  test("should handle fillProfile action creator", () => {
    expect(profileReducer(void 0, profileActions.fillProfile(__.userProfile)))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "TEST_ID",
  "firstName": "Walter",
  "lastName": "White",
  "avatar": "TEST_AVATAR",
  "token": "TEST_TOKEN",
}
`);
  });

  test("should handle updateAvatar action creator", () => {
    expect(profileReducer(void 0, profileActions.updateAvatar(__.url)))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "https://www.url.com",
  "token": "",
}
`);
  });

  test("should handle clearProfile action creator", () => {
    expect(
      profileReducer(void 0, profileActions.clearProfile())
    ).toMatchInlineSnapshot(`Immutable.Map {}`);
  });
});
