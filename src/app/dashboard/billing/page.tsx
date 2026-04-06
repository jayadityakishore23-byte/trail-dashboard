import { Download, CreditCard, Receipt, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function BillingPage() {
  const invoices = [
    { id: "INV-2023-08", date: "Aug 1, 2023", amount: "$2,500", status: "Paid" },
    { id: "INV-2023-07", date: "Jul 1, 2023", amount: "$2,500", status: "Paid" },
    { id: "INV-2023-06", date: "Jun 1, 2023", amount: "$2,500", status: "Paid" },
  ];

  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Billing & Invoicing</h1>
        <p className="text-zinc-400">Manage your subscription, upcoming payments, and past invoices.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan Span 2 Columns */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#18181b] to-[#09090b] border border-yellow-400/30 rounded-2xl p-8 relative overflow-hidden">
          {/* Abstract background element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl rounded-full"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div>
              <span className="px-3 py-1 bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 text-xs font-bold rounded-full mb-4 inline-block">
                ACTIVE RETAINER
              </span>
              <h2 className="text-3xl font-bold text-white mb-2">Growth Plan</h2>
              <p className="text-zinc-400 max-w-md">15 Short-form videos and 2 Long-form videos per month. Priority support included.</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-white">$2,500</p>
              <p className="text-zinc-500 text-sm">/ month</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#27272a] flex flex-wrap items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#27272a] rounded-xl flex items-center justify-center">
                <CreditCard className="text-zinc-400" />
              </div>
              <div>
                <p className="text-white font-medium">Visa ending in 4242</p>
                <p className="text-zinc-500 text-sm">Next billing on Sep 1, 2023</p>
              </div>
            </div>
            
            <button className="px-6 py-2.5 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors">
              Update Payment Method
            </button>
          </div>
        </div>

        {/* Quick Stats Column */}
        <div className="space-y-6">
          <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6">
            <h3 className="text-zinc-400 font-medium mb-2">Available Credits</h3>
            <p className="text-4xl font-bold text-white">4 <span className="text-lg text-zinc-500 font-normal">videos</span></p>
            <div className="mt-4 w-full bg-[#27272a] rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-xs text-zinc-500 mt-2">11/15 short-form videos delivered</p>
          </div>

          <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6">
            <h3 className="text-zinc-400 font-medium mb-2">Outstanding Balance</h3>
            <p className="text-4xl font-bold text-white mb-4">$0.00</p>
            <button className="w-full py-2.5 bg-[#27272a] text-zinc-400 font-bold rounded-lg cursor-not-allowed">
              Make a Payment
            </button>
          </div>
        </div>
      </div>

      {/* Invoice History */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Receipt size={24} className="text-zinc-400" />
          Invoice History
        </h3>
        
        <div className="bg-[#18181b] border border-[#27272a] rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#09090b] border-b border-[#27272a] text-zinc-400 text-sm">
              <tr>
                <th className="font-medium p-4 pl-6">Invoice #</th>
                <th className="font-medium p-4">Date</th>
                <th className="font-medium p-4">Amount</th>
                <th className="font-medium p-4">Status</th>
                <th className="font-medium p-4 pr-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#27272a]">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 pl-6 font-medium text-white">{invoice.id}</td>
                  <td className="p-4 text-zinc-400">{invoice.date}</td>
                  <td className="p-4 text-zinc-300">{invoice.amount}</td>
                  <td className="p-4">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium rounded-full w-max">
                      <CheckCircle2 size={12} />
                      {invoice.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <button className="text-zinc-500 hover:text-white transition-colors p-2 flex items-center justify-end w-full gap-2">
                      <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">Download</span>
                      <Download size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
