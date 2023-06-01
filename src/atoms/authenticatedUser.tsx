import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const {persistAtom} = recoilPersist();
const authenticatedUser = atom({
	key: 'authenticated_user',
	default: {
		firstname: '',
		lastname: '',
		email:'',
	},
	effects_UNSTABLE: [persistAtom]
});

export default authenticatedUser;