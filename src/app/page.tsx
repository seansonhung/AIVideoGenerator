import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Provider from "./provider";

export default function Home() {
  return (
    <div>
      <Provider>
        <Button> Click </Button>
        <UserButton />
        
      </Provider>
    </div>
  );
}
