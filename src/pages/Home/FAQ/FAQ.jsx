import React from "react";

const FAQ = () => {
  return (
    <div className="py-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">What is CoinCrafter?</div>
        <div className="collapse-content text-sm">
          CoinCrafter is a micro-tasking platform that connects buyers who need
          tasks done with workers who want to earn money by completing those
          tasks.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I start earning?
        </div>
        <div className="collapse-content text-sm">
          Simply create an account as a 'Worker', browse the available tasks on
          the task list, choose one you like, complete it according to the
          instructions, and submit it for review. Once approved, you will
          receive coins in your account.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How much does it cost to post a task?
        </div>
        <div className="collapse-content text-sm">
          As a buyer, you set the price per task and the number of workers you
          need. The total cost is the price per task multiplied by the number of
          workers. You'll need to purchase coins to cover this cost.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I withdraw my earning?
        </div>
        <div className="collapse-content text-sm">
          Once you've accumulated enough coins, you can go to the 'Withdrawals'
          page in your dashboard. The platform has a minimum withdrawal amount.
          20 coins are equivalent to $1 for withdrawal.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Is my payment information secure?
        </div>
        <div className="collapse-content text-sm">
          Yes, we use Stripe, a leading payment processor, to handle all
          transactions. Your financial details are encrypted and securely
          processed.
        </div>
      </div>
    </div>
  );
};

export default FAQ;
