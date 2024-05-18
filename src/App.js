import Card from "./components/Card/Card";

function App() {
  const cardsData = [
    {
      title: "Plumbing",
      content: [
        "Install / Replace a Toilet",
        "Install / Replace a Faucet",
        "Fix a Leaking",
        "Install / Replace a Sink",
        "Repair Under Sink Plumbing",
      ],
      width: 94,
      svgName: "icon-Tap",
      color: "#179D2E",
    },
    {
      title: "Drywall & painting",
      content: [
        "Install Drywall",
        "Patch and Paint Drywall",
        "Paint a Wall / Trim",
        "Paint or Stain A Fence",
        "Paint a Cabinet Door",
      ],
      width: 91,
      svgName: "icon-paint",
      color: "#0177B8",
    },
    {
      title: "Furniture assembly",
      content: [
        "Assemble Fitness Equipment",
        "Assemble - Custom Request",
        "Assemble a TV Stand",
        "Assemble Pet Furniture",
        "Assemble a Bar Cabinet",
      ],
      width: 123,
      svgName: "icon-sofa",
      color: "#F5AF23",
    },
    {
      title: "Electrical",
      content: [
        "Install / Replace a Ceiling Fan",
        "Replace Switch & Outlet Faceplate",
        "Upgrade to a Video Doorbell",
        "Install / Replace an Bathroom Exhaust Fan",
      ],
      width: 111,
      svgName: "icon-Electrical",
      color: "#F02E2C",
    },
    {
      title: "Doors & windows",
      content: [
        "Install / Replace New Door",
        "Install / Replace a Screen Door",
        "Install / Replace a Window Screen",
        "Repair a Door Frame",
      ],
      width: 110,
      svgName: "icon-door",
      color: "#179D2E",
    },
    {
      title: "Hanging & mounting",
      content: [
        "Mount a TV",
        "Remove a TV Mount from Wall",
        "Mount and Hang a Projector Screen",
        "Hang a Bathroom Fixture",
      ],
      width: 117,
      svgName: "icon-picture",
      color: "#0177B8",
    },
    {
      title: "Appliance installation",
      content: [
        "Replace an Existing Dishwasher",
        "Replace an Existing Microwave",
        "Replace an Existing Oven",
      ],
      width: 98,
      svgName: "icon-instalation",
      color: "#F5AF23",
    },
    {
      title: "Smart home",
      content: [
        "Install a Smart Lock",
        "Install a Smart Home Security Camera",
        "Mount a Baby Monitor Camera on the Wall",
        "Install an Under Sink Water Filtration System",
      ],
      width: 116,
      svgName: "icon-home",
      color: "#F02E2C",
    },
    {
      title: "Outdoor",
      content: [
        " Assemble an Outdoor Trampoline",
        "Hang a Garage Shelving Unit",
        "Install Outdoor Decorative Exterior Window Shutters",
        "Install a Storm Door",
      ],
      width: 94,
      svgName: "icon-squares",
      color: "#179D2E",
    },
  ];
  const sizes = [{ height: "527px" }, { height: "545px" }, { height: "587px" }];
  return (
    <div
      className=" flex flex-wrap justify-around  gap-6"
      style={{ padding: "30px" }}
    >
      {cardsData.map((item, index) => {
        const size = sizes[Math.floor(index / 3)];
        return (
          <Card
            key={index}
            title={item.title}
            content={item.content}
            width={item.width}
            containerHeight={size.height}
            svgName={item.svgName}
            color={item.color}
          />
        );
      })}
    </div>
  );
}

export default App;
