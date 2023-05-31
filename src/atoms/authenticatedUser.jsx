import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist();
const authenticatedUser = atom({
	key: 'authenticatedUser',
	default: {
		username: 'username',
		name: 'name'
	},
	effects_UNSTABLE: [persistAtom]
});

export default authenticatedUser;