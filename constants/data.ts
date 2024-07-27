export const headerLinks = [
  {
    label: "Commuinity Hub",
    route: "/",
  },
  {
    label: "Forum",
    route: "/events/create",
  },
  {
    label: "Blog",
    route: "/profile",
  },
  {
    label: "Resources",
    route: "/profile",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
