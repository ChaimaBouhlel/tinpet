import {useEffect, useState} from "react";
import {Check, Info, X} from "react-feather"
import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/router";
import {useMutation} from "@tanstack/react-query";

const USER_REGEX = /^[A-z]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {

    const router = useRouter()

    const [firstName, setFirstName] = useState('');
    const [validName, setValidName] = useState(false);
    const [firstNameFocus, setFirstNameFocus] = useState(false);

    const [lastName, setLastName] = useState('');
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setValidName(USER_REGEX.test(firstName));
    }, [firstName])

    useEffect(() => {
        setValidLastName(USER_REGEX.test(lastName));
    }, [lastName])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [firstName, pwd, matchPwd])


    const mutation = useMutation({
        mutationFn: async (data) => {
            return await axios.post(process.env.NEXT_PUBLIC_REGISTER_URL,
                {firstname: firstName, lastname: lastName, email, password: pwd},
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
        },
        onSuccess: ({data}) => {
            console.log(data)
            setFirstName('');
            setLastName('');
            setEmail("")
            setPwd('');
            setMatchPwd('');
            setSuccess(true);
            setTimeout(() => {
                router.push("/login")
            }, 5000)
        },
        onError: error => {
            setErrMsg(error.message)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate();
    }

    const divStyle = {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/pets_register.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <>
            {success ? (
                    <div className="bg-amber-50 rounded-2xl p-12 mx-40 my-10 absolute ">
                        <h1 className="text-center text-amber-800 text-2xl">Account created Successfully!</h1>
                        <Link href="/login" className="text-center text-amber-800 text-2xl underline">Sign In</Link>
                    </div>
                )
                : null
            }
            <div className="flex flex-row md:p-24 p-12 bg-cover" style={divStyle}>
                <div className="md:w-1/3 bg-orange-200 rounded-2xl p-12 mx-auto my-0">
                    <p className={errMsg ? "text-amber-800 text-sm font-bold mb-4" : "hidden"}
                       aria-live="assertive">{errMsg}</p>
                    <h1 className="text-center font-poppins font-bold text-3xl text-amber-800 mb-4">Register</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                            <div className="flex-row flex text-amber-800">
                                <p>First Name:</p>
                                <Check size={24} color="green" className={validName ? "valid" : "hidden"}/>
                                <X size={24} color="red"
                                   className={validName || !firstName ? "hidden" : "invalid"}/>
                            </div>
                        <input
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            onFocus={() => setFirstNameFocus(true)}
                            onBlur={() => setFirstNameFocus(false)}
                            className="mb-1 rounded p-1 bg-amber-50"
                        />
                        <p className={firstNameFocus && firstName && !validName ? "flex flex-row items-center gap-2 text-xs text-gray-500" : "hidden"}>
                            <Info size={20}/>
                            Must contain at least 3 letters.
                            Only letters are allowed.
                        </p>
                            <div className="flex-row flex text-amber-800 mt-2">
                                <p>Last Name:</p>
                                <Check size={24} color="green" className={validLastName ? "valid" : "hidden"}/>
                                <X size={24} color="red"
                                   className={validLastName || !lastName ? "hidden" : "invalid"}/>
                            </div>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            onFocus={() => setLastNameFocus(true)}
                            onBlur={() => setLastNameFocus(false)}
                            className="mb-1 rounded p-1 bg-amber-50"
                        />
                        <p className={lastNameFocus && lastName && !validLastName ? "flex flex-row items-center gap-2 text-xs text-gray-500" : "hidden"}>
                            <Info size={20}/>
                            Must contain at least 3 letters.
                            Only letters are allowed.
                        </p>
                            <div className="flex-row flex text-amber-800 mt-2">
                                <p>Email:</p>
                                <Check size={24} color="green" className={validEmail ? "valid" : "hidden"}/>
                                <X size={24} color="red"
                                   className={validEmail || !email ? "hidden" : "invalid"}/>
                            </div>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            className="mb-1 rounded p-1 bg-amber-50"
                        />
                        <p className={emailFocus && email && !validEmail ? "flex flex-row items-center gap-2 text-xs text-gray-500" : "hidden"}>
                            <Info size={20}/>
                            Must be a valid email
                        </p>
                            <div className="flex-row flex text-amber-800 mt-2">
                                <p> Password:</p>
                                <Check size={24} color="green" className={validPwd ? "valid" : "hidden"}/>
                                <X size={24} color="red" className={validPwd || !pwd ? "hidden" : "invalid"}/>
                            </div>
                        <input
                            type="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            className="mb-1 rounded p-1 bg-amber-50 text-gray-700"
                        />
                        <div
                           className={pwdFocus && !validPwd ? "flex-row flex items-center gap-2 text-xs text-gray-500" : "hidden"}>
                            <Info size={20}/>
                            <div className="w-5/6">
                                8 to 24 characters.<br/>
                                Must include uppercase and lowercase letters, a number and a special character.<br/>
                                Allowed special characters: <span aria-label="exclamation mark">!</span> <span
                                aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span
                                aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </div>
                        </div>

                            <div className="flex-row flex text-amber-800 mt-2">
                                <p> Confirm Password </p>
                                <Check size={24} color="green"
                                       className={validMatch && matchPwd ? "valid" : "hidden"}/>
                                <X size={24} color="red"
                                   className={validMatch || !matchPwd ? "hidden" : "invalid"}/>
                            </div>
                        <input
                            type="password"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            className="mb-1 rounded p-1 bg-amber-50"
                        />
                        <div
                           className={matchFocus && !validMatch ? "flex-row flex items-center gap-2 text-xs text-gray-500" : "hidden"}>
                            <Info size={24} color="gray"/>
                            Must match the first password input field.
                        </div>
                        <button disabled={!validLastName || !validName || !validPwd || !validMatch ? true : false}
                                className="mt-3 bg-amber-700 text-amber-50 font-bold font-poppins rounded-lg py-2 hover:shadow-xl">Sign
                            Up
                        </button>
                    </form>
                    <p className="mt-2 text-sm text-amber-800">
                        Already registered?
                        <span className="ml-1 font-bold underline">
                                <Link href="/login">Sign In</Link>
                        </span>
                    </p>
                </div>
            </div>
            )
        </>
    )
}

export default Register