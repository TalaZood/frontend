import { Suspense } from "react";
import LoginForm from "./components/LoginForm";
import Container from "@/components/Container";

export default function LoginPage() {
  return (
    <Container className="px-4">
      <Suspense fallback={<span>در حال بارگذاری ...</span>}>
        <LoginForm />
      </Suspense>
    </Container>
  );
}
