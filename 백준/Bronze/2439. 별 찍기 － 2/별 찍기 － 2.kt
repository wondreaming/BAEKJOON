fun main() {
    val N = readln().toInt()
    val result = mutableListOf<String>()
    for (i in 1..N) {
        result.add(" ".repeat(N - i) + "*".repeat(i))
    }
    println(result.joinToString("\n"))
}