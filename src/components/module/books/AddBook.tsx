import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateBookMutation } from "@/redux/api/baseApi";
import type { IBook } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function AddBook() {
  const [open, setOpen] = useState(false);
  const form = useForm<IBook>();

  const [createBook, { isLoading }] = useCreateBookMutation();
  


  const onSubmit = async (data: IBook) => {
    // console.log("my books", data);
    try {
      const res = await createBook(data).unwrap();
      toast.success("✅ Book added successfully!");
      form.reset();
      setOpen(false);
    } catch (err) {
      toast.error("❌ Failed to add book.");
      console.error(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      {isLoading && <p>Submitting book...</p>}
      {/* {isError && <p className="text-red-500">Something went wrong.</p>} */}

      <DialogTrigger asChild>
        <Button className="bg-teal-400"> Add Book </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a Book</DialogTitle>

        </DialogHeader>
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <label>Title</label>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <label>Author</label>
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <label>Genre</label>
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <select {...field} className="w-full border p-2 rounded bg-black">
                        <option value="">Select genre</option>
                        <option value="FICTION">FICTION</option>
                        <option value="NON_FICTION">NON_FICTION</option>
                        <option value="SCIENCE">SCIENCE</option>
                        <option value="HISTORY">HISTORY</option>
                        <option value="BIOGRAPHY">BIOGRAPHY</option>
                        <option value="FANTASY">FANTASY</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <label>ISBN</label>
              <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <label>Copies</label>
              <FormField
                control={form.control}
                name="copies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className="mt-5">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit"> Add Book </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
