import { uiReducer } from "../reducer";
import { uiActions } from "../actions";

describe("uiReducer reducer:", () => {
    test("should return initial state by default", () => {
        expect(uiReducer(void 0, { type: "@@INIT" })).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
    });
    test("should handle startFetching action creatort", () => {
        expect(uiReducer(void 0, uiActions.startFetching())).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": true,
  "isOnline": false,
}
`);
    });
    test("should handle stoptFetching action creatort", () => {
        expect(uiReducer(void 0, uiActions.stoptFetching())).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
    });
    test("should handle setOnlineState action creatort", () => {
        expect(uiReducer(void 0, uiActions.setOnlineState()))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": true,
}
`);
    });
    test("should handle setOfflineState action creatort", () => {
        expect(uiReducer(void 0, uiActions.setOfflineState()))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
    });
});
