import AccountAddress from '../../../AccountAddress'
import AccountIcon from '../../../AccountIcon'

const PaymentV2Summary = ({ txn, address, role }) => {
  if (role === 'payee') {
    const amount =
      txn.payments.length === 1
        ? txn.totalAmount.toString(2)
        : txn.payments
            .find((payment) => payment.payee === address)
            .amount.toString(2)

    return (
      <span className="flex items-center">
        <img alt="" src="/images/hnt.svg" className="w-4 mr-1" />
        <span className="text-xs font-sans font-light tracking-tight flex items-center justify-start">
          {amount} from
          <div className="ml-1">
            <span className="flex flex-row items-center justify-start space-x-0.5">
              <AccountIcon address={txn.payer} size={12} />
              <AccountAddress
                showSecondHalf={false}
                mono
                address={txn.payer}
                truncate={5}
              />
            </span>
          </div>
        </span>
      </span>
    )
  } else if (role === 'payer') {
    const amount = txn.totalAmount.toString(3)
    return (
      <span className="flex items-center">
        <img alt="" src="/images/hnt.svg" className="w-4 mr-1" />
        <span className="text-xs font-sans font-light tracking-tight flex items-center justify-start">
          {amount} to
          <div className="ml-1">
            {txn?.payments?.length === 1 ? (
              <span className="flex flex-row items-center justify-start space-x-0.5">
                <AccountIcon address={txn.payments[0].payee} size={12} />
                <AccountAddress
                  showSecondHalf={false}
                  mono
                  address={txn.payments[0].payee}
                  truncate={4}
                />
              </span>
            ) : (
              'multiple recipients'
            )}
          </div>
        </span>
      </span>
    )
  }
}

export default PaymentV2Summary
