import {
    annotate,
    annotationGroup
  } from "https://unpkg.com/rough-notation?module";
  
  const e1 = annotate(document.querySelector(".idInput"), {
    type: "box",
    color: "#4831d4"
  });
  const e2 = annotate(document.querySelector(".passwordInput"), {
    type: "box",
    color: "#4831d4"
  });
  
  const annotation = annotationGroup([e1, e2]);
  
  // const e = document.querySelector(".decoration");
  // const annotation_circle = annotate(e, { type: "circle", color: "#4831d4" });
  // annotation_circle.show();
  annotation.show();
  