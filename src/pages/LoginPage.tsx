const LoginPage = () => {
  return (
    <>
      <div className="flex justify-center flex-col min-h-screen items-center">
        <div className="w-full max-w-xs p-5 border border-slate-300 rounded ">
          <h1 className="text-3xl font-bold  text-blue-600">Login</h1>
          <p className="font-medium text-slate-500 mb-5">
            Welcome , plase enter your details
          </p>

          <div>
            <label
              htmlFor="name"
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="border w-full px-4 py-2 text-slate-600 placeholder: opacity-50"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="password"
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="border w-full px-4 py-2 text-slate-600 placeholder: opacity-50"
            />
          </div>
          <button className="w-full bg-blue-600 text-white mt-3 px-4 py-1 rounded-sm">
            SUBMIT
          </button>
          <p className="text-sm text-center mt-2">
            Don't have an account ?{" "}
            <a
              href="/Register"
              className="text-blue-600 underline underline-offset-4"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
