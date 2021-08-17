import React, { Component } from "react";
import LoadingComponent from "../Topics/LoadingComponent";
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";

function TopicBrowser() {
  return (
    (<p>Hello World</p>),
    (
      <div>
        <LoadingComponent />
        {/* <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum /> */}
      </div>
    )
  );
}
export default TopicBrowser;
