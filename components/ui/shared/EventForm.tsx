"use client";

type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
};
export default function EventForm({ userId, type }: EventFormProps) {
  return <div>EventForm{type}</div>;
}
