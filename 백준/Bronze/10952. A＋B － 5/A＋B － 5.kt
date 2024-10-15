fun main() {
    while (true) {
        val nums = readln()
        val (A, B) = if (nums != "0 0") nums.split(" ").map{ it.toInt() } else break
        println(A + B)
    }
}