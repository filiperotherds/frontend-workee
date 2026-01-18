const EstimateCard = ({
  sender,
  subject,
  time,
}: {
  sender: string;
  subject: string;
  time: string;
}) => (
  <div className="group flex flex-col gap-1 p-4 transition-colors hover:bg-gray-50 cursor-pointer">
    <div className="flex justify-between items-center">
      <span className="font-semibold text-sm text-gray-900">{sender}</span>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
    <p className="text-xs text-gray-600 line-clamp-1">{subject}</p>
  </div>
);

export function EstimatesList() {
  const estimates = [
    {
      id: 1,
      sender: "Guilherme",
      subject: "Revisão do Projeto Next.js",
      time: "10:30",
    },
    {
      id: 2,
      sender: "Equipe Design",
      subject: "Novos Assets da Campanha",
      time: "09:15",
    },
    {
      id: 3,
      sender: "GitHub",
      subject: "[Security] Alert for repo...",
      time: "Ontem",
    },
    {
      id: 4,
      sender: "Slack",
      subject: "Você tem 5 novas mensagens",
      time: "Ontem",
    },
    {
      id: 5,
      sender: "LinkedIn",
      subject: "Sua candidatura foi visualizada",
      time: "2 dias",
    },
    {
      id: 6,
      sender: "Vercel",
      subject: "Deployment Successful",
      time: "3 dias",
    },
  ];

  return (
    <div className="relative w-96 h-full bg-white border-r border-border">
      <div className="h-full overflow-y-auto scrollbar-hide">
        <div className="divide-y divide-gray-100">
          {estimates.map((estimate) => (
            <EstimateCard key={estimate.id} {...estimate} />
          ))}
        </div>
      </div>
    </div>
  );
}
