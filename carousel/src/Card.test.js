import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon";

const TEST_PHOTO = TEST_IMAGES[1];

it("renders without crashing", function () {
  render(
  <Card
    caption={TEST_PHOTO.caption}
    src={TEST_PHOTO.src}
    currNum="1"
    totalNum="1" />
  );
});


it("matches snapshot", function () {
  const { container } = render(
    <Card
      caption={TEST_PHOTO.caption}
      src={TEST_PHOTO.src}
      currNum="1"
      totalNum="1" />);
  expect(container).toMatchSnapshot();

});