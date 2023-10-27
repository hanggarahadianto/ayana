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
          <Button className="bg-red-500 hover:bg-red-600" variant="outline">
            Delete
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <div className="flex px-4 py-61 py-2">
            <DialogHeader>
              <DialogDescription className="font-semibold mr-10 mt-2 text-xl">
                Do you want to delete ?
              </DialogDescription>
            </DialogHeader>

            <Button className="bg-red-400 hover:bg-red-500" type="submit">
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteHome;
