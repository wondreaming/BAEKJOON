fun main() {
    val year = readln().trim().toInt()

    val result = if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) 1 else 0
    println(result)
}