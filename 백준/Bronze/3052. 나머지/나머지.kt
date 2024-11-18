fun main() {
    val result = mutableSetOf<Int>()
    for (i in 1..10) {
        result.add(readln().toInt() % 42)
    }
    println(result.size)
}