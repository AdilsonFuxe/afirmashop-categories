import kafka from "@src/adapters/message-queue/kafka/connection";
import {
  addAccountRepository,
  updateAccessTokenRepository
} from "@src/adapters/db/mongoose/repositories/account-repository";

export const subscribe = async () => {
  const consumer = kafka.consumer({groupId: 'categories'});
  await consumer.subscribe({topics: ['authentication-events']});

  await consumer.run({
    eachMessage: async ({topic, partition, message, heartbeat, pause}) => {
      const data = JSON.parse(message.value.toString());
      const key = message.key.toString();
      switch (key) {
        case 'sign-up':

          data._id = data.id;
          delete data.id;
          addAccountRepository(data);
          break;
        case 'sign-in':
          updateAccessTokenRepository(data.email, data.accessToken);
          break;
      }

      console.log({
        key: message.key.toString(),
        value: message.value.toString(),
        headers: message.headers,
      });
    },
  });
}