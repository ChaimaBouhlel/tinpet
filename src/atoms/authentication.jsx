import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist();
const authentication = atom({
	key: 'authentication',
	default: false,
	effects_UNSTABLE: [persistAtom]
})

export default authentication;