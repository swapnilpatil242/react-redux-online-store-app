import Enzyme from "enzyme"; // 3
import Adapter from "enzyme-adapter-react-16"; // 4

Enzyme.configure({ adapter: new Adapter() });
