import { annotate, annotationGroup } from "https://unpkg.com/rough-notation?module";

let annotationList = []

Array.prototype.forEach.call(document.getElementsByClassName("sign-up-info"), (item) => {
  console.log(item);
  const ele = annotate(item, {
    type: "box",
    color: "#4831d4"
  });
  annotationList.push(ele);
})

const annotation = annotationGroup(annotationList);

annotation.show();
