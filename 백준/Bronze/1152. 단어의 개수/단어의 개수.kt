fun main() {
    val S = readln().trim().split(" ").filter { it.isNotEmpty() }
    val result = if (S.isEmpty()) 0 else S.size
    println(result)
}