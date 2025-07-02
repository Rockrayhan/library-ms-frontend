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
import { addTask } from "@/redux/features/tasks/taskSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useForm } from "react-hook-form";

export function AddTask() {
  const form = useForm();

  const dispatch = useAppDispatch() ;

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(addTask(data)) ;
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="destructive"> Add Task </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add task</DialogTitle>
            <DialogDescription>
              Add task that only you can finish.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form action="" onSubmit={form.handleSubmit(onSubmit)}>
              <label htmlFor=""> Title </label>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input {...field}  value={field.value || ""}/>
                    </FormControl>
                  </FormItem>
                )}
              />
              <label htmlFor=""> description </label>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input {...field}  value={field.value || ""}/>
                    </FormControl>
                  </FormItem>
                )}
              />

              <DialogFooter className="mt-5">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
