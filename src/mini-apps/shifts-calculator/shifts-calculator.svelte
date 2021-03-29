<script>
  import { appLang } from '../../stores/settings'
  import { data } from './data'

  const formater = new Intl.DateTimeFormat($appLang || 'el-GR', {
    dateStyle: 'short'
  })

  const currency = new Intl.NumberFormat($appLang || 'el-GR', { style: 'currency', currency: 'EUR' })
  
  let today
  
  $: {
    console.log('appLang set to ', $appLang)
    today = formater.format(Date.now())
  }

  $: def = data.map(calcDef).reduce(reducer)
  $: cashCollected = data.map(item => item.amount).reduce(reducer)
  $: deposit = data.map(item => item.deposit).reduce(reducer)
  $: totalDef = deposit - cashCollected
  
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const calcDef = (item) => (item.deposit - item.amount)
</script>

<style>
  table {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

tfoot td { border: none; font-weight: 600; }
tfoot tr:hover { background-color: transparent; }

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>

<!-- markup (zero or more items) goes here -->

{today} - {def}

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Date</th>
      <th>Amount</th>
      <th>Deposit</th>
      <th>Def</th>
    </tr>
  </thead>
  <tbody>
    {#each data as item}
    <tr>
      <td>{item.id}</td>
      <td>{formater.format(item.date)}</td>
      <td>{currency.format(item.amount / 100)}</td>
      <td>{currency.format(item.deposit / 100)}</td>
      <td>{currency.format(calcDef(item) / 100)}</td>
    </tr> 
    {/each}
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td></td>
      <td>{ currency.format(cashCollected / 100) }</td>
      <td>{currency.format(deposit / 100)}</td>
      <td>{currency.format(totalDef / 100)}</td>
    </tr>
  </tfoot>
</table>