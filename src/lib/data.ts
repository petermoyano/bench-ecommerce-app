import bcrypt from "bcryptjs";

export const sampleData = {
  products: [
    {
      id: "bab48f2a-0c8d-40b8-92bd-49cd50026fc1",
      name: "Sauce Labs Backpack",
      description:
        "Carry all your things with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
      price: 29.99,
      image: "/images/bag.png",
    },
    {
      id: "bab48f2a-0c8d-40b8-92bd-49cd50026fc2",
      name: "Sauce Labs Bike Light",
      description:
        "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
      price: 9.99,
      image: "/images/bike-light.png",
    },
    {
      id: "bab48f2a-0c8d-40b8-92bd-49cd50026fc3",
      name: "Sauce Labs Bolt T-Shirt",
      description:
        "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
      price: 15.99,
      image: "/images/black-tshirt.png",
    },
    {
      id: "bab48f2a-0c8d-40b8-92bd-49cd50026fc4",
      name: "Sauce Labs Fleece Jacket",
      description:
        "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
      price: 49.99,
      image: "/images/fleece-jacket.png",
    },
    {
      id: "bab48f2a-0c8d-40b8-92bd-49cd50026fc5",
      name: "Sauce Labs Onesie",
      description:
        "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
      price: 7.99,
      image: "/images/onesie.png",
    },
    {
      id: "bab48f2a-0c8d-40b8-92bd-49cd50026fc6",
      name: "T-Shirt (Red)",
      description:
        "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
      price: 15.99,
      image: "/images/red-tshirt.png",
    },
  ],
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
};
