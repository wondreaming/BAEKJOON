fun main() {
    val N = readln().toInt()
    val scores = readln().split(" ").map { it.toDouble() }

    val M = scores.max()
    val result = scores.map { it / M * 100.0 }.sum() / N
    println(result)
}