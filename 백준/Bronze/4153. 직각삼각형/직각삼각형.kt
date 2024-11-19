fun main() {
    val result = mutableListOf<String>()
    while (true) {
        val (a, b, c) = readln().split(" ").map { it.toInt() }.sorted()
        if (a == 0 && b == 0 && c == 0) break

        if (a * a + b * b == c * c) result.add("right") else result.add("wrong")
    }
    println(result.joinToString("\n"))
}