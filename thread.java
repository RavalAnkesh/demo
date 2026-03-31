public class thread {

    public static void main
        System.out.println("---- Single Thread ----");

        for (int i = 1; i <= 5; i++) {
            System.out.println("Main Thread: " + i);
        }

        // ==============================
        // 🔹 MULTITHREADING
        // ==============================
        System.out.println("---- Multithreading ----");

        // Thread 1
        Thread t1 = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Thread 1: " + i);
            }
        });

        // Thread 2
        Thread t2 = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Thread 2: " + i);
            }
        });

        // Start both threads
        t1.start();
        t2.start();
    }
}
