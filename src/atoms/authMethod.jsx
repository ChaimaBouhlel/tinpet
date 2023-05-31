import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist();
const authMethod = atom({
	key: 'authMethod',
	default: 'login',
	effects_UNSTABLE: [persistAtom]
})

export default authMethod;