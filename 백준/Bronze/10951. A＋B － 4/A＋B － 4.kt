fun main() {
    val result = mutableListOf<Int>()

    while (true) {
        val input = readlnOrNull()
        if (input == null) break
        if (input != null) {
            val (A, B) = input.split(" ").map { it.toInt() }
            result.add(A + B)
        }
    }

    println(result.joinToString("\n"))
}