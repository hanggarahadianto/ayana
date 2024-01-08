import { Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

const api_URL = "http://localhost:7000/home/deleteById";

interface PropsID {
  params: {
    id: string;
  };
}

const DeleteHome: React.FC<PropsID> = async (id: PropsID) => {
  const handleDelete = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const response = await fetch(`${api_URL}/${id}`, {
      method: "delete",
    });
    console.log(api_URL);

    if (!response.ok) {
      console.log("failed to fetch");
      return;
    }

    console.log("delete success");
    return;
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-red-300 hover:bg-red-400" variant="outline">
            <Trash2Icon className="h-8" />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <div className="flex px-4 py-61 py-2 mt-10">
            <DialogHeader>
              <DialogDescription className="font-semibold mr-10 mt-2 text-xl">
                Do you want to delete ?
              </DialogDescription>
            </DialogHeader>

            {/* <Button
              // onClick={() => handleDelete()}
              className="bg-red-400 hover:bg-red-500"
            >
              Delete
            </Button> */}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteHome;
