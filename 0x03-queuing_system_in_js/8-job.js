import { addJobToQueue } from './8-jobs';
export function addJobToQueue(queue, job) {
  if (!queue || !job) {
    throw new Error('Invalid arguments');
  }
  queue.push(job);
}

  jobs.forEach(jobInfo => {
    const job_ = queue.create('push_notification_code_3', jobInfo);

    job_.on('enqueue', () => {
      console.log(`Notification job created: ${job_.id}`);
    });

    job_.on('complete', () => {
      console.log(`Notification job ${job_.id} completed`);
    });

    job_.on('failed', (errorMessage) => {
      console.log(`Notification job ${job_.id} failed: ${errorMessage}`);
    });

    job_.on('progress', (progress, _data) => {
      console.log(`Notification job ${job_.id} ${progress}% complete`);
    });

    job_.save();
  });
};

export default createPushNotificationsJobs;
