<template>
  <div>
    <h4>{{title}}</h4>
    <v-data-table
      :headers="headers"
      :items="tickets"
      :items-per-page="5"
      class="elevation-1"
    >
    <template v-slot:item.status="{ item }">
        <v-chip
          :color="getColor(item.status)"
          dark
        >
          {{ getStatusName(item.status) }}
        </v-chip>
      </template>
      <template v-slot:item.pickedTime="{ item }">
        <div>{{item.pickedTime | formatDate}}</div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import TicketStatus from '../constants/TicketStatus'
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      data: {
        type: Array
      }
    },
    data () {
      return {
        headers: [
          {
            text: this.t('ticketNb'),
            align: 'start',
            sortable: false,
            value: 'ticketNb',
          },
          { text: this.t('task'), value: 'task' },
          { text: this.t('pickUpTime'), value: 'pickedTime' },
          { text: this.t('assignTo'), value: 'assignedTo' },
          { text: this.t('customer'), value: 'customer' },
          { text: this.t('status'), value: 'status' },
        ],
        tickets: [
          {
            ticketNb: '0-14',
            task: 'task1',
            pickedTime: '2020-09-16 12:32:37',
            assignedTo: 'Jack Hanna',
            customer: 'Mike John',
            status: 1,
          },
          {
            ticketNb: '14-18',
            task: 'task2',
            pickedTime: '2020-10-16 12:30:30',
            assignedTo: 'Jad Melhif',
            customer: 'Fadi Raid',
            status: 2,
          },
          {
            ticketNb: '20-14',
            task: 'task3',
            pickedTime: '2020-10-16 12:30:30',
            assignedTo: 'Hiba Sallo',
            customer: 'Jean Bassd',
            status: 2,
          },
          {
            ticketNb: '24-30',
            task: 'task4',
            pickedTime: '2021-02-16 12:30:30',
            assignedTo: 'Rasha Wael',
            customer: 'Razan senno',
            status: 3,
          },
          
        ],
      }
    },
    methods: {
      getColor (status) {
        if (status === TicketStatus.IN_PROGRESS) return 'blue'
        else if (status === TicketStatus.PENDING) return 'orange'
        else if (status === TicketStatus.RESOLVED) return 'green'
        else return 'red'
      },
      getStatusName (status) {
        if (status === TicketStatus.IN_PROGRESS) return 'In progress'
        else if (status === TicketStatus.PENDING) return 'Pending'
        else if (status === TicketStatus.RESOLVED) return 'Resolved'
        else return 'Cancelled'
      },
    },
  }
</script>