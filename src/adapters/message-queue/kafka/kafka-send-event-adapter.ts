import {SendEvent} from "@src/ports/out";
import kafka from "@src/adapters/message-queue/kafka/connection";

export const kafkaSendEventAdapter: SendEvent = async (topic, data) => {
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    topic,
    messages: [
      {key: topic, value: data},
    ],
  });

  await producer.disconnect();
}