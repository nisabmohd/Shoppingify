export function Login() {
  return (
    <div>
      <div
        className="login-form"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input type="text" />
        <input type="password" />
        <button>Login</button>
      </div>
    </div>
  );
}
