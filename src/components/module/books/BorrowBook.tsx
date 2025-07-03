import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";
import type { IBook } from "@/types";
import { useState } from "react";
import { useNavigate } from "react-router";

interface BorrowFormProps {
  book: IBook;
}

export function BorrowBook({ book }: BorrowFormProps) {
  const [open, setOpen] = useState(false);

  const form = useForm<{ quantity: number; dueDate: string }>();
  const [borrowBook] = useBorrowBookMutation();

  const navigate  = useNavigate();
  const onSubmit = async (values: { quantity: number; dueDate: string }) => {
    if (values.quantity > book.copies) {
      toast.error("❌ Quantity exceeds available copies.");
      return;
    }

    if (confirm("Are you sure you want to borrow this book ?")) {
      try {
        await borrowBook({
          book: book._id,
          quantity: values.quantity,
          dueDate: values.dueDate,
        }).unwrap();

        toast.success("✅ Book borrowed successfully!");
        form.reset();
        setOpen(false);
        navigate("/borrow-summary")
      } catch (err: any) {
        toast.error(`❌ Failed to borrow book. ${err?.data?.message || ""}`);
        console.error(err);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gray-400">Borrow</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Borrow "{book.title}"</DialogTitle>
          <DialogDescription>
            You can borrow up to {book.copies} copies.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label>Quantity</label>
            <Input
              type="number"
              {...form.register("quantity", { required: true, min: 1 })}
              placeholder="Enter quantity"
              max={book.copies}
            />
          </div>
          <div>
            <label>Due Date</label>
            <Input
              type="date"
              className="bg-gray-400"
              style={{ colorScheme: "dark" }}
              {...form.register("dueDate", { required: true })}
            />
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Borrow</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
