import Mock from "mockjs";

Mock.mock("/api/create", {
  "list|5": [
    {
      id: "@guid",
      img: '@image("150x200","@color")',
      title: "@title"
    }
  ]
});
