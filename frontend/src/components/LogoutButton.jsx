import { Button } from "@chakra-ui/button";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom.js";
import toast from "react-hot-toast";

const LogoutButton = () => {
	const setUser = useSetRecoilState(userAtom);

	const handleLogout = async () => {
		try {
			const res = await fetch("/api/users/logout", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();

			if (data.error) {
				toast.error(data.error);
				return;
			}

			localStorage.removeItem("user-threads");
			setUser(null);
		} catch (error) {
			toast.error(error);
		}
	};
	return (
		<Button position={"fixed"} top={"30px"} right={"30px"} size={"sm"} onClick={handleLogout}>
			Logout
		</Button>
	);
};

export default LogoutButton;