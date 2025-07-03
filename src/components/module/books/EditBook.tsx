import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
import { useUpdateBookMutation } from "@/redux/api/baseApi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import type { IBook } from "@/types";

interface Props {
  book: IBook;
}

export function EditBook({ book }: Props) {
  const [open, setOpen] = useState(false);
  const form = useForm<IBook>({ defaultValues: book });

  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const onSubmit = async (data: IBook) => {
    try {
      await updateBook({ id: book._id, data }).unwrap();
      toast.success("✅ Book updated successfully!");
      setOpen(false);
    } catch (error) {
      toast.error("❌ Failed to update book.");
      console.error(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-yellow-600">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
          <DialogDescription>Update book info below.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full border p-2 rounded bg-background">
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

            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl><Input {...field} /></FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl><Input type="number" {...field} /></FormControl>
                </FormItem>
              )}
            />

            <DialogFooter className="pt-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
