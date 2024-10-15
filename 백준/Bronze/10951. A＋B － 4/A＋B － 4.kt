fun main() {
    val input = mutableListOf<String>()

    while (true) {
        val line = readLine() ?: break
        input.add(line)
    }

    for (i in 0..input.size - 1) {
        val (A, B) = input[i].split(" ").map{ it.toInt() }
        println(A + B)
    }
}