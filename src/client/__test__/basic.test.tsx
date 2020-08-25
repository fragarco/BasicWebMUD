import * as React from "react";
import { shallow } from "enzyme";
import { AppFrame } from "../components/appframe";

describe("AppFrame Component", () => {
    let repr: any = null;

    beforeEach(() => {
        repr = shallow(<AppFrame />);
    });

    it("Should have hello world message", () => {
        console.log(repr);
        expect(
            repr.contains(<h1>Hello World!</h1>),
        ).toBe(true);
    });

});
