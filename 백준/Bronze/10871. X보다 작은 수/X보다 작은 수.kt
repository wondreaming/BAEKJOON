fun main() {
    val firstLine = readln()
    val secondLine = readln()
    val (N, X) = firstLine.split(" ").map { it.toInt() }
    val nums = secondLine.split(" ").map { it.toInt() }
    val result = mutableListOf<Int>()
    for (num in nums) {
        if (num < X) {
            result.add(num)
        }
    }
    println(result.joinToString(" "))
}