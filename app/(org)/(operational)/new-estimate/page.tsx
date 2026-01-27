import { EstimateForm } from "./estimate-form";

export default function NewEstimate() {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col items-center p-8 rounded-lg bg-white">
      <EstimateForm />
    </div>
  );
}
